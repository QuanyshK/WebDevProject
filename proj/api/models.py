from django.db import models
from django.utils import timezone


class SongInfo(models.Model):
  id = models.PositiveIntegerField(primary_key=True)
  img = models.CharField(max_length=200)
  name = models.CharField(max_length=100)
  author = models.CharField(max_length=100)
  link = models.CharField(max_length=200)
  duration = models.PositiveIntegerField()

  def __str__(self) -> str:
    return f"id:{self.id},img:{self.img},name:{self.name},author:{self.author},link:{self.link},duration:{self.duration}"

  class Meta:
    verbose_name = "SongInfo"
