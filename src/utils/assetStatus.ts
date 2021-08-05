export const assetStatus = (
  statusParam: 'inAlert' | 'inDowntime' | 'inOperation',
): 'Em Alerta' | 'Em Operação' | 'Em Parada' => {
  const status =
    statusParam === 'inAlert'
      ? 'Em Alerta'
      : statusParam === 'inOperation'
      ? 'Em Operação'
      : 'Em Parada';

  return status;
};
