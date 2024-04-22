from django.contrib import admin

from api.models import SongInfo, AlbumInfo


# Register your models here.
@admin.register(SongInfo)
class SongInfoAdmin(admin.ModelAdmin):
    list_display = ('id', 'img', 'name', 'author', 'link', 'duration', 'album')
    search_fields = ('id', 'img', 'name', 'author', 'link', 'duration', 'album')


@admin.register(AlbumInfo)
class AlbumInfoAdmin(admin.ModelAdmin):
    list_display = ('id', 'img', 'name', 'author', 'duration', 'songamount', 'year')
    search_fields = ('id', 'img', 'name', 'author', 'duration', 'songamount', 'year')



