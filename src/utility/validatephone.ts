const formatRwandanPhone = (phone: string) => {
  let cleaned = phone.trim();

  // remove spaces
  cleaned = cleaned.replace(/\s+/g, "");

  // if starts with 0 → convert to +250
  if (cleaned.startsWith("0")) {
    return "250" + cleaned.substring(1);
  }

  
  // if already correct format
  if (cleaned.startsWith("250")) {
    return cleaned;
  }

  // fallback (optional safety)
  return "250" + cleaned;
};

export {formatRwandanPhone};