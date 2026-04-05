import type { NextApiRequest, NextApiResponse } from 'next';

type ContactResponse = {
  success: boolean;
  message: string;
};

const FORMSUBMIT_BASE_URL = 'https://formsubmit.co/ajax';
const FORMSUBMIT_FORM_KEY =
  process.env.FORMSUBMIT_FORM_KEY?.trim() ||
  'f970466b06e61a6b93e4ce6a5a141a84';

type FormSubmitResponse = {
  success?: boolean | string;
  message?: string;
};

function readField(body: NextApiRequest['body'], field: string): string {
  if (typeof body === 'string') {
    return (new URLSearchParams(body).get(field) || '').trim();
  }

  if (body && typeof body === 'object') {
    const value = (body as Record<string, unknown>)[field];
    return typeof value === 'string' ? value.trim() : '';
  }

  return '';
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContactResponse>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({
      success: false,
      message: 'Method not allowed.',
    });
  }

  const name = readField(req.body, 'name');
  const email = readField(req.body, 'email');
  const message = readField(req.body, 'message');

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Name, email, and message are required.',
    });
  }

  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailIsValid) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email.',
    });
  }

  try {
    const endpoint = `${FORMSUBMIT_BASE_URL}/${encodeURIComponent(
      FORMSUBMIT_FORM_KEY
    )}`;
    const host = req.headers.host || '';
    const originHeader =
      (req.headers.origin as string | undefined) ||
      (host ? `http://${host}` : '');
    const refererHeader =
      (req.headers.referer as string | undefined) ||
      (originHeader ? `${originHeader}/` : '');
    const payload = new URLSearchParams({
      name,
      email,
      message,
      _subject: `New portfolio message from ${name}`,
      _template: 'table',
      _captcha: 'false',
      _replyto: email,
    });

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        ...(originHeader ? { Origin: originHeader } : {}),
        ...(refererHeader ? { Referer: refererHeader } : {}),
      },
      body: payload.toString(),
    });

    const responseText = await response.text();
    let providerData: FormSubmitResponse | null = null;
    try {
      providerData = JSON.parse(responseText) as FormSubmitResponse;
    } catch {
      providerData = null;
    }

    if (!response.ok || providerData?.success === false || providerData?.success === 'false') {
      return res.status(502).json({
        success: false,
        message:
          providerData?.message ||
          'Could not send your message right now. Please try again.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully.',
    });
  } catch {
    return res.status(500).json({
      success: false,
      message: 'Server error while sending message.',
    });
  }
}
