import { ApiModelProperty } from '@nestjs/swagger';

export class LocationDTO {
  @ApiModelProperty()
  readonly id: number;
  @ApiModelProperty()
  readonly title: string;
  @ApiModelProperty()
  readonly country: string;
  @ApiModelProperty()
  readonly city: string;
  @ApiModelProperty()
  readonly img: string;
}
