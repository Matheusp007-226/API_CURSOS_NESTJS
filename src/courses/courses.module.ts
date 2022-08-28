import { Module } from '@nestjs/common';
import { courseProviders } from './course.providers';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [CoursesController],
    providers: [...courseProviders,CoursesService],
})
export class CoursesModule {}
