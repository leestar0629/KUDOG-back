import { ApiProperty } from '@nestjs/swagger';

export class NoticeFilterRequestDto {
  @ApiProperty({ description: '카테고리 목록', example: '공지사항' })
  categories?: string;

  @ApiProperty({ description: 'Provider 목록', example: '정보대학,미디어학부' })
  providers?: string;

  @ApiProperty({ description: '조회 시작 기간', example: '2020-01-01' })
  start_date?: string;

  @ApiProperty({ description: '조회 종료 기간', example: '2020-01-01' })
  end_date?: string;
}
