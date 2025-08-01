from django.db import models

class Csd(models.Model):
    name = models.CharField(max_length=100)
    rollno = models.IntegerField()
    slug = models.SlugField(unique=True, null=True, blank=True)   
    image = models.ImageField(upload_to='images/', null=True)

    def __str__(self):
        return f"{self.name} - {self.rollno}"
