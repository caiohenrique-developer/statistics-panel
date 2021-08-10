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

    g.highcharts-axis-labels > text,
    g.highcharts-label > text,
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
  }
`;
