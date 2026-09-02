export default async (request, context) => {
  const country = context.geo?.country?.code ?? "US";
  const url = new URL(request.url);

  // Serve a different file at the SAME url based on country
  url.pathname = country === "US" ? "/us.html" : "/intl.html";
  return context.rewrite(url);
};

export const config = { path: "/" };
