from django.contrib import admin

from api.models import SongInfo


# Register your models here.
@admin.register(SongInfo)
class SongInfoAdmin(admin.ModelAdmin):
    list_display = ('id', 'img', 'name', 'author', 'link', 'duration')
    search_fields = ('id', 'img', 'name', 'author', 'link', 'duration')
