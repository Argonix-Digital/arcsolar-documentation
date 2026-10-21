# Ask ChatGPT about ArcSolar

Use the existing page context menu in the docs and a general help link in the ArcSolar app. The handoff uses the person's own ChatGPT session and account limits. It makes no ArcSolar OpenAI API request and requires no Mintlify AI subscription.

## General app link

Label: **Ask ChatGPT**

URL:

```text
https://chatgpt.com/?q=Help%20me%20use%20ArcSolar%20based%20on%20https%3A%2F%2Fdocs.arcsolar.com.au.%0A%0AMy%20question%3A%20
```

It prefills:

```text
Help me use ArcSolar based on https://docs.arcsolar.com.au.

My question:
```

The person adds their question and sends it. In the signed-in browser session tested on 21 October 2026, opening the URL left this text in the editable composer with a Send button; it did not send a message.

Equivalent app implementation:

```tsx
const prompt =
  "Help me use ArcSolar based on https://docs.arcsolar.com.au.\n\nMy question: ";
const chatGptHelpUrl = `https://chatgpt.com/?q=${encodeURIComponent(prompt)}`;

<a href={chatGptHelpUrl} target="_blank" rel="noopener noreferrer">
  Ask ChatGPT
</a>
```

Put this beside Documentation in the app's Help menu. For a contextual app entry point, replace the docs root in the prompt with the relevant public guide, such as `https://docs.arcsolar.com.au/quoting/walkthrough`.

Only pass public documentation context. Private customer names, quote contents, account identifiers and app session tokens should not be included in the link. This is help with documented workflows, not access to the user's private workspace.

## Documentation pages

`docs.json` enables Mintlify's native `chatgpt` contextual option alongside Copy page and View as Markdown. It appears as **Open in ChatGPT — Ask questions about this page**, and uses the current page as context.

This is supported by [Mintlify's contextual menu documentation](https://www.mintlify.com/docs/ai/contextual-menu). Local preview URLs are not publicly readable by ChatGPT; test the page-context destination on the hosted site after publishing.

## Coverage

- The general `q` link was verified in the signed-in ChatGPT web composer without sending.
- The docs action was verified in the local page menu.
- The query-link behaviour is observed browser behaviour, not a versioned OpenAI API contract. Login redirects or later ChatGPT changes can affect it; the existing Copy page action remains a fallback.
- ChatGPT must read the relevant public guides to ground its response. A link does not train a model on all ArcSolar documentation or guarantee a correct answer.
