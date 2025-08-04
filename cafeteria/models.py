from django.db import models


# About section (simple, editable text)
class About(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    image = models.ImageField(upload_to="about/", blank=True, null=True)

    def __str__(self):
        return self.title


# Menu section
class MenuItem(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    image = models.ImageField(upload_to="menu/", blank=True, null=True)

    def __str__(self):
        return self.name


# Comics section
class ComicChapter(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    date_published = models.DateField()
    thumbnail = models.ImageField(upload_to="comics/thumbnails/", blank=True, null=True)

    def __str__(self):
        return self.title


class ComicPage(models.Model):
    chapter = models.ForeignKey(
        ComicChapter, related_name="pages", on_delete=models.CASCADE
    )
    image = models.ImageField(upload_to="comics/pages/")
    page_number = models.PositiveIntegerField()

    class Meta:
        ordering = ["page_number"]

    def __str__(self):
        return f"{self.chapter.title} - Page {self.page_number}"
