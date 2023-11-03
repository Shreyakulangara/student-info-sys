from django.db import models
from django.utils import timezone

class EventManager(models.Manager):
    def future_events(self):
        return self.filter(date__gte=timezone.now().date())
    
class Event(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    date = models.DateField()
    time = models.TimeField()
    location = models.CharField(max_length=100)
    organizer = models.CharField(max_length=100)
    image = models.ImageField(upload_to='media/', null=True, blank=True)
    objects = EventManager()
    def __str__(self):
        return self.title
