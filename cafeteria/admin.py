from django.contrib import admin

# Register your models here.
from .models import About, MenuItem, ComicChapter, ComicPage

admin.site.register(About)
admin.site.register(MenuItem)
admin.site.register(ComicChapter)
admin.site.register(ComicPage)
