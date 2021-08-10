import { FetchAssetsProps } from '@utils/types/api';

export const highchartsOptions = (
  assetsApiData: FetchAssetsProps[],
): Record<string, unknown> => {
  const barGraphData = assetsApiData.map(({ name, healthscore }) => ({
    name,
    y: healthscore,
  }));

  const inAlertTotal = assetsApiData.filter(
    ({ status: statusType }) => statusType === 'inAlert',
  ).length;
  const inOperationTotal = assetsApiData.filter(
    ({ status: statusType }) => statusType === 'inOperation',
  ).length;
  const inDowntimeTotal = assetsApiData.filter(
    ({ status: statusType }) => statusType === 'inDowntime',
  ).length;

  const discGraphData = [
    ['Em Alerta', inAlertTotal],
    ['Em Operação', inOperationTotal],
    ['Em Parada', inDowntimeTotal, true, true],
  ];

  const barGraphOption = {
    chart: {
      type: 'column',
      backgroundColor: '#282C31',
    },
    title: {
      text: 'Statísticas dos ativos',
    },
    subtitle: {
      text: 'Estado atual',
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
        data: barGraphData,
      },
    ],
  };

  const discGraphOption = {
    chart: {
      backgroundColor: '#282C31',
    },
    title: {
      text: 'Visão geral dos estados',
    },
    series: [
      {
        type: 'pie',
        allowPointSelect: true,
        keys: ['name', 'y', 'selected', 'sliced'],
        data: discGraphData,
        showInLegend: true,
      },
    ],
  };

  return { barGraphOption, discGraphOption };
};
