from django.db import models

# Create your models here.
class Course(models.Model):
    course_name = models.CharField(max_length=100)
    course_code = models.CharField(max_length=10)
    instructor = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.course_name
