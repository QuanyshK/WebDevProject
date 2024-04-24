from django.db import models
from django.utils import timezone

class AuthorInfo(models.Model):
    id = models.PositiveIntegerField(primary_key=True)
    name = models.CharField(max_length=100)
    img = models.CharField(max_length=200)
    songamount = models.PositiveIntegerField()
    listeningCount=models.PositiveIntegerField()

    def __str__(self) -> str:
        return f"id:{self.id}"f"self.name:{self.name}" + f"self.img:{self.img}"

    class Meta:
        verbose_name = "AuthorInfo"


class AlbumInfo(models.Model):
    img = models.CharField(max_length=200)
    name = models.CharField(max_length=100)
    author=models.ForeignKey(AuthorInfo,on_delete=models.CASCADE)
    duration = models.PositiveIntegerField()
    songamount = models.PositiveIntegerField()
    year = models.PositiveIntegerField()

    def __str__(self) -> str:
        return f"img:{self.img},name:{self.name},author:{self.author},dur:{self.duration},s:{self.songamount},y:{self.year}"

    class Meta:
        verbose_name = "AlbumInfo"


class SongInfo(models.Model):
    id = models.PositiveIntegerField(primary_key=True)
    img = models.CharField(max_length=200)
    name = models.CharField(max_length=100)
    author = models.ForeignKey(AuthorInfo,on_delete=models.CASCADE,null=True)
    link = models.CharField(max_length=200)
    duration = models.PositiveIntegerField()
    album = models.ForeignKey(AlbumInfo, on_delete=models.CASCADE, null=True)

    def __str__(self) -> str:
        return f"id:{self.id},img:{self.img},name:{self.name},author:{self.author},link:{self.link},duration:{self.duration}"

    class Meta:
        verbose_name = "SongInfo"



