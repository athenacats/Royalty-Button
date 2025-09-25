export default function handler(req, res) {
  if (req.method === "POST") {
    return res.json({
      canvas: {
        content: {
          components: [
            {
              type: "button",
              id: "start_quote_details",
              label: "Start Online Form",
              style: "primary",
              action: {
                type: "url",
                url: "https://quoteforms.app/royalty-insurance/forms/9da9424c-32a9-42cc-a6ec-e54948bc7df4/respond?utm_source=intercom&utm_medium=workflow&utm_campaign=quote_intake",
              },
            },
          ],
        },
      },
    });
  }
  res.status(405).end();
}
