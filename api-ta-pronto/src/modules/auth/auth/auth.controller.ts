import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiTags, ApiResponse, ApiBadRequestResponse } from '@nestjs/swagger';
import { SignInDto } from './signIn.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  @ApiOperation({ summary: 'Autentica um usuário' })
  @ApiResponse({ status: 200, description: 'Usuário autenticado com sucesso' })
  @ApiBadRequestResponse({ description: 'Credenciais inválidas' })
  async signIn(@Body() signInDto: SignInDto) {
    const { id, password } = signInDto;
    return this.authService.signIn(id, password);
  }
}
