export const borda = (e) => {
  e.currentTarget.style.outline = "none";
  e.currentTarget.style.border = "1px solid var(--colorDarkSlateGrey)";
};

export const removerBorda = (e) => {
  e.currentTarget.style.border = "1px solid var(--colorGrey)";
};

export const validarEmail = (email) => {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return re.test(String(email).toLowerCase());
};
