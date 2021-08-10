import { FetchAssetsProps } from '@utils/types/api';

export const highchartsOptions = (
  assetsApiData: FetchAssetsProps[],
): Record<string, unknown> => {
  const assetInfo = assetsApiData.map(({ name, healthscore, status }) => ({
    name,
    y: healthscore,
    status,
  }));

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
        data: assetInfo,
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
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    series: [
      {
        type: 'pie',
        allowPointSelect: true,
        keys: ['name', 'y', 'selected', 'sliced'],
        data: [
          ['Apples', 29.9, false],
          ['Pears', 71.5, false],
          ['Oranges', 106.4, false],
          ['Plums', 129.2, false],
          ['Bananas', 144.0, false],
          ['Peaches', 176.0, false],
          ['Prunes', 135.6, true, true],
          ['Avocados', 148.5, false],
        ],
        showInLegend: true,
      },
    ],
  };

  return { barGraphOption, discGraphOption };
};
