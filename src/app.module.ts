import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizService } from './entities/quiz/quiz.service';
import { QuizController } from './entities/quiz/quiz.controller';
import { Quiz } from './entities/quiz/quiz.entity';
import { UserService } from './entities/user/user.service';
import { UserController } from './entities/user/user.controller';
import { User } from './entities/user/user.entity';

@Module({
  imports: [
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'quizdb',
    entities: [Quiz, User],
    synchronize: true,
  }),
  ],
  controllers: [AppController, QuizController, UserController],
  providers: [AppService, QuizService, UserService],
})
export class AppModule {}
