export function slugifyProperty(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getPropertyTitle(property) {
  return (
    property?.title ||
    property?.project_name ||
    property?.property_name ||
    property?.project_title ||
    property?.property_title ||
    property?.name ||
    "property"
  );
}

export function getPropertySlug(property) {
  return property?.slug || slugifyProperty(getPropertyTitle(property));
}

export function getPropertyDetailHref(property) {
  return `/${getPropertySlug(property)}`;
}