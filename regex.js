function processarInput(input) {
  const regex = /^(\d+(?:\.\d+)?)\s*(?:(kg|g)\s*)?(.*)/i;
  const match = regex.exec(input);

  if (!match) {
    return {
      quantidade: null,
      unidadeDeMedida: 'unitária',
      nomeDoItem: input.trim(),
    };
  }

  const quantity = parseFloat(match[1]);
  const unit = match[2]?.toLowerCase() || 'unitária';
  const name = match[3].trim();

  return {
    quantity,
    unit,
    name,
  };
} 