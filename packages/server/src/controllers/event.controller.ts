import {
    Post,
    HttpCode,
    Body,
    HttpStatus,
    HttpException,
    Controller,
    Delete,
    Param,
    Get,
} from "@nestjs/common";
import { ApiOperation, ApiUseTags, ApiResponse } from "@nestjs/swagger";
import { CreateEventDto } from "../dtos";
import { Event } from "../entities";
import { EventService } from "src/services/event.service";
import { UpdateEventDto } from "src/dtos/update-event.dto";

@ApiUseTags("Event")
@Controller("api/v1/event")
export class EventController {
    public constructor(private readonly _eventService: EventService) {}

    @ApiOperation({
        operationId: "createEvent",
        title: "Create Event",
        description: "Create a new Event",
    })
    @Post()
    @HttpCode(HttpStatus.OK)
    public async create(@Body() createEventDto: CreateEventDto): Promise<Event> {
        const event = await this._eventService.create(createEventDto);
        if (!event) {
            throw new HttpException("Failed to create Event", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return event;
    }

    @ApiOperation({
        operationId: "updateEvent",
        title: "Update Event",
        description: "Update an Event",
    })
    @ApiResponse({ status: HttpStatus.OK, type: Event })
    @ApiResponse({ status: HttpStatus.NOT_FOUND })
    @Post(":id")
    public async update(
        @Param("id") id: string,
        @Body() updateEventDto: UpdateEventDto
    ): Promise<Event> {
        const event = await this._eventService.update(id, updateEventDto);
        if (!event) {
            //TODO: When we use the class-validator errors we'll be able to tell the difference between not found and some other error here...
            throw new HttpException("Event not found", HttpStatus.NOT_FOUND);
        }
        return event;
    }

    @ApiOperation({
        operationId: "getEvent",
        title: "Get Event",
        description: "Retrieve an Event",
    })
    @Get(":id")
    @ApiResponse({ status: HttpStatus.OK, type: Event })
    @ApiResponse({ status: HttpStatus.NOT_FOUND })
    public async get(@Param("id") id: string): Promise<Event> {
        const event = await this._eventService.get(id, true);
        if (!event) {
            throw new HttpException("Event not found", HttpStatus.NOT_FOUND);
        }
        return event;
    }

    @ApiOperation({
        operationId: "deleteEvent",
        title: "Delete Event",
        description: "Delete an Event",
    })
    @Delete(":id")
    @HttpCode(HttpStatus.OK)
    @HttpCode(HttpStatus.NOT_FOUND)
    public async delete(@Param("id") id: string): Promise<Event> {
        const event = await this._eventService.delete(id);
        if (!event) {
            throw new HttpException("Failed to delete Event", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return event;
    }
}