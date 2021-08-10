import styled from 'styled-components';

export const HighchartsGraph = styled.div`
  display: flex;

  > div {
    background: var(--dark_282);
    border: 1px solid var(--gray_4D4);
    border-radius: 0.813rem;
    padding: 1.5rem;

    text.highcharts-title {
      font-weight: bold;
    }

    tspan.highcharts-text-outline {
      display: none;
    }

    g.highcharts-label:not(.highcharts-tooltip) > text,
    g.highcharts-axis-labels > text,
    g.highcharts-legend text,
    text.highcharts-title {
      color: var(--ice_CAC) !important;
      fill: var(--ice_CAC) !important;
    }

    div.highcharts-container,
    div.highcharts-container svg.highcharts-root {
      width: 100% !important;
      height: 100% !important;
    }

    .highcharts-color-0 rect.highcharts-point,
    .highcharts-color-0 tspan:nth-of-type(3),
    .highcharts-point.highcharts-color-0 {
      fill: rgb(191, 129, 37) !important;
    }
    .highcharts-color-1 rect.highcharts-point,
    .highcharts-color-1 tspan:nth-of-type(3),
    .highcharts-point.highcharts-color-1 {
      fill: rgb(43, 144, 143) !important;
    }
    .highcharts-color-2 rect.highcharts-point,
    .highcharts-color-2 tspan:nth-of-type(3),
    .highcharts-point.highcharts-color-2 {
      fill: rgb(244, 91, 91) !important;
    }
  }
`;
