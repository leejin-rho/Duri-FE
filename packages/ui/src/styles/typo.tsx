import { css } from '@emotion/react';

export const calcRem = (px: number) => `${px / 16}rem`;
/**
 * @param Title1: 페이지 제목 타이틀
 * @param Title2: 본문 타이틀
 * @param Title3: 박스 안에 들어가는 타이틀
 * @param Title4: 가게 상세 페이지 타이틀
 *
 * @param Caption1: 타이틀 위/아래 부가설명 텍스트
 * @param Caption2: 거리표시 텍스트
 * @param Caption3: 박스 안에 들어가는 타이틀 밑 부가설명 텍스트
 * @param Caption4: 주소 텍스트
 * @param Caption5: 미니 박스 내부 텍스트
 *
 * @param Label1: 별점
 * @param Label2: 지도 텍스트
 * @param Label3: 후기 갯수
 * @param Label: 스케줄러 숫자 텍스트
 *
 * @param Body1: 정렬 본문 텍스트
 * @param Body2: 스케줄러 이름 텍스트
 * @param Body3: 팝업 부가 설명 텍스트
 * @param Body4: 스케줄러 담당쌤 텍스트 / 스케줄러 성별/특징 텍스트
 * @param Body1Light: 정렬 본문 텍스트 (라이트)
 *
 * @param Letter: 피드백 텍스트
 * @param Heading: 온보딩 텍스트
 */

export const typo = {
  // 타이포 시스템
  Title1: css`
    /* 페이지 타이틀 */
    font-family: 'Pretendard';
    font-size: ${calcRem(18)};
    font-weight: 600;
    line-height: normal;
  `,
  Title2: css`
    /* 본문 타이틀 */
    font-family: 'Pretendard';
    font-size: ${calcRem(17)};
    font-weight: 600;
    line-height: normal;
  `,
  Title3: css`
    /* 박스 안에 들어가는 타이틀 */
    font-family: 'Pretendard';
    font-size: ${calcRem(16)};
    font-weight: 600;
    line-height: normal;
  `,
  Title4: css`
    /* 가게 상세 타이틀 */
    font-family: 'Pretendard';
    font-size: ${calcRem(22)};
    font-weight: 600;
    line-height: normal;
  `,
  Caption1: css`
    /* 타이틀 위/아래 부가설명 텍스트 */
    font-family: 'Pretendard';
    font-size: ${calcRem(14)};
    font-weight: 300;
    line-height: normal;
  `,
  Caption2: css`
    /* 거리표시 텍스트 */
    font-family: 'Pretendard';
    font-size: ${calcRem(13)};
    font-weight: 500;
    line-height: normal;
  `,
  Caption3: css`
    /* 박스 안에 들어가는 타이틀 밑 부가설명 텍스트 */
    font-family: 'Pretendard';
    font-size: ${calcRem(13)};
    font-weight: 400;
    line-height: normal;
  `,
  Caption4: css`
    /* 주소 텍스트 */
    font-family: 'Pretendard';
    font-size: ${calcRem(13)};
    font-weight: 300;
    line-height: normal;
  `,
  Caption5: css`
    /* 미니 박스 텍스트 */
    font-family: 'Pretendard';
    font-size: ${calcRem(12)};
    font-weight: 400;
    line-height: normal;
  `,
  Label1: css`
    /* 별점 */
    font-family: 'Pretendard';
    font-size: ${calcRem(14)};
    font-weight: 600;
    line-height: normal;
  `,
  Label2: css`
    /* 지도 텍스트 */
    font-family: 'Pretendard';
    font-size: ${calcRem(14)};
    font-weight: 500;
    line-height: normal;
  `,
  Label3: css`
    /* 후기 갯수 */
    font-family: 'Pretendard';
    font-size: ${calcRem(14)};
    font-weight: 400;
    line-height: normal;
  `,
  Label4: css`
    /* 스케줄러 숫자 텍스트 */
    font-family: 'Pretendard';
    font-size: ${calcRem(13)};
    font-weight: 600;
    line-height: 14px;
  `,
  Body1: css`
    /* 정렬 본문 텍스트 */
    font-family: 'Pretendard';
    font-size: ${calcRem(20)};
    font-weight: 500;
    line-height: normal;
  `,
  Body2: css`
    /* 스케줄러 이름 텍스트 */
    font-family: 'Pretendard';
    font-size: ${calcRem(16)};
    font-weight: 500;
    line-height: normal;
  `,
  Body3: css`
    /* 팝업 부가설명 텍스트 */
    font-family: 'Pretendard';
    font-size: ${calcRem(15)};
    font-weight: 400;
    line-height: normal;
  `,
  Body4: css`
    /* 스케줄러 성별,특징 / 담당쌤 텍스트 */
    font-family: 'Pretendard';
    font-size: ${calcRem(15)};
    font-weight: 300;
    line-height: normal;
  `,
  Body1Light: css`
    /* 정렬 본문 텍스트 */
    font-family: 'Pretendard';
    font-size: ${calcRem(20)};
    font-weight: 300;
    line-height: normal;
  `,
  Letter: css`
    /* 피드백 텍스트 */
    font-family: 'OwnglyphRyryu';
    font-size: ${calcRem(18)};
    font-weight: 400;
    line-height: normal;
  `,

  Heading: css`
    /* 온보딩 텍스트 */
    font-family: 'Pretendard';
    font-size: ${calcRem(24)};
    font-weight: 600;
    line-height: 140%;
  `,
} as const;
