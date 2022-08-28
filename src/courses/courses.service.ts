import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {

    private courses: Course[] = [
        {
            id: 1,
            name: "Fundamentos do framework NestJS",
            description: "Fundamentos do framework NestJS"
        }
    ];

    constructor(
        @Inject("COURSE_REPOSITORY")
        private courseRepository: Repository<Course>
        ){}

    findAll(): Promise<Course[]>{
        return this.courseRepository.find();
    }

    findOne(id: number){
        return this.courseRepository.findOne( { where: { id: id } })
    }

    create(createCourseDTO: any){
        return this.courseRepository.save(createCourseDTO);
    }

    update(id: string, updateCourseDTO: any){

        return this.courseRepository.update(id, updateCourseDTO);

    }

    remove(id: string){

        return this.courseRepository.delete(id);
         
    }
}
