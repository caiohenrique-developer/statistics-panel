import styled from 'styled-components';

export const HighchartsGraph = styled.div`
  display: grid;
  gap: 1.875rem;
  grid-template-columns: 1fr 0.6fr;

  > div {
    background: var(--dark_282);
    border: 1px solid var(--gray_4D4);
    border-radius: 0.813rem;
    padding: 1.5rem;

    .highcharts-title {
      font-weight: bold;
    }

    .highcharts-text-outline {
      display: none;
    }

    .highcharts-title,
    .highcharts-legend text,
    .highcharts-axis-labels > text,
    .highcharts-label:not(.highcharts-tooltip) > text {
      color: var(--ice_CAC) !important;
      fill: var(--ice_CAC) !important;
    }

    .highcharts-root,
    .highcharts-container {
      width: 100% !important;
      height: 100% !important;
    }

    &:last-of-type {
      .highcharts-color-0 {
        tspan:nth-of-type(3),
        rect.highcharts-point,
        & {
          fill: rgb(191, 129, 37) !important;
        }
      }
      .highcharts-color-1 {
        tspan:nth-of-type(3),
        rect.highcharts-point,
        & {
          fill: rgb(43, 144, 143) !important;
        }
      }
      .highcharts-color-2 {
        tspan:nth-of-type(3),
        rect.highcharts-point,
        & {
          fill: rgb(244, 91, 91) !important;
        }
      }
    }
  }
`;
