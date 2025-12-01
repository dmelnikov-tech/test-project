import {
  Controller,
  Get,
  Headers,
  Ip,
  Query,
  Req,
  Res,
  Session,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import type { Request, Response } from 'express';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get('query')
  getQuery(@Query() query: any) {
    return JSON.stringify(query);
  }

  @Get('headers')
  getHeaders(@Headers() headers: any) {
    return headers;
  }

  @Get('user-agent')
  getUserAgent(@Headers('user-agent') userAgent: string) {
    return userAgent;
  }

  @Get('request')
  getRequestDetails(@Req() request: Request) {
    return {
      method: request.method,
      url: request.url,
      headers: request.headers,
      body: request.body,
    };
  }

  @Get('response')
  getResponse(@Res() response: Response) {
    response.status(200).send('Hello World');
  }

  @Get('ip')
  getIp(@Ip() ip: string) {
    return ip;
  }

  @Get('session')
  getSession(@Session() session: any) {
    return session;
  }
}
