import { FetchAssetsProps } from '@utils/types/api';

export const highchartsOptions = (
  assetsApiData: FetchAssetsProps[],
): Record<string, unknown> => {
  const assetInfo = assetsApiData.map(({ name, healthscore }) => ({
    name,
    y: healthscore,
  }));

  return {
    chart: {
      type: 'column',
      backgroundColor: {
        linearGradient: [0, 0, 500, 500],
        stops: [
          [0, '#212427'],
          [1, '#282C31'],
        ],
      },
    },
    title: {
      text: 'Status dos ativos',
    },
    subtitle: {
      text: 'Passe o mouse por cima das estatísticas',
    },
    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    xAxis: {
      type: 'category',
    },
    yAxis: {
      title: {
        text: 'Saúde dos ativos em %',
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '{point.y:.1f}%',
        },
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>',
    },
    series: [
      {
        name: 'Ativo',
        colorByPoint: true,
        data: assetInfo,
      },
    ],
  };
};
