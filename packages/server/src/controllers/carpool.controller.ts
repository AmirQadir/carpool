import { ApiOperation, ApiUseTags, ApiResponse, ApiCreatedResponse } from "@nestjs/swagger";
import {
    Post,
    Put,
    HttpStatus,
    Body,
    HttpException,
    Controller,
    Param,
    Delete,
    Get,
} from "@nestjs/common";
import { Carpool } from "../entities";
import { CreateCarpoolDto, UpdateCarpoolDto } from "../dtos";
import { CarpoolService } from "../services";

@ApiUseTags("Carpool")
@Controller("api/v1/carpool")
export class CarpoolController {
    public constructor(private readonly _carpoolService: CarpoolService) {}

    @ApiOperation({
        operationId: "createCarpool",
        title: "Create Carpool",
        description: "Create a new Carpool",
    })
    @ApiCreatedResponse({ type: Carpool })
    @Post()
    public async create(@Body() createCarpoolDto: CreateCarpoolDto): Promise<Carpool> {
        return await this._carpoolService.create(createCarpoolDto);
    }

    @ApiOperation({
        operationId: "getCarpool",
        title: "Get Carpool",
        description: "Retrieve a Carpool",
    })
    @ApiResponse({ status: HttpStatus.OK, type: Carpool })
    @ApiResponse({ status: HttpStatus.NOT_FOUND })
    @Get(":id")
    public async get(@Param("id") id: string): Promise<Carpool> {
        return await this._carpoolService.get(id);
    }

    @ApiOperation({
        operationId: "updateCarpool",
        title: "Update Carpool",
        description: "Update a Carpool",
    })
    @ApiResponse({ status: HttpStatus.OK, type: Carpool })
    @ApiResponse({ status: HttpStatus.NOT_FOUND })
    @Put(":id")
    public async update(
        @Param("id") id: string,
        @Body() updateCarpoolDto: UpdateCarpoolDto
    ): Promise<Carpool> {
        return await this._carpoolService.update(id, updateCarpoolDto);
    }

    @ApiOperation({
        operationId: "deleteCarpool",
        title: "Delete Carpool",
        description: "Delete a Carpool",
    })
    @ApiResponse({ status: HttpStatus.OK, type: Carpool })
    @ApiResponse({ status: HttpStatus.NOT_FOUND })
    @Delete(":id")
    public async delete(@Param("id") id: string): Promise<Carpool> {
        return await this._carpoolService.delete(id);
    }
}
