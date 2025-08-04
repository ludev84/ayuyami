from django.shortcuts import render, get_object_or_404
from django.db.models import Q
from .models import ComicChapter

def comic_list(request):
    chapters = ComicChapter.objects.all().order_by('-date_published')
    return render(request, 'cafeteria/comic_list.html', {'chapters': chapters})

def comic_detail(request, chapter_id):
    chapter = get_object_or_404(ComicChapter, id=chapter_id)
    pages = chapter.pages.all()
    
    # Get previous and next chapters
    all_chapters = ComicChapter.objects.all().order_by('-date_published')
    current_index = None
    
    # Find current chapter's position
    for i, ch in enumerate(all_chapters):
        if ch.id == chapter.id:
            current_index = i
            break
    
    # Get previous and next chapters
    prev_chapter = None
    next_chapter = None
    
    if current_index is not None:
        if current_index > 0:  # Not the first chapter
            prev_chapter = all_chapters[current_index - 1]
        if current_index < len(all_chapters) - 1:  # Not the last chapter
            next_chapter = all_chapters[current_index + 1]
    
    context = {
        'chapter': chapter,
        'pages': pages,
        'prev_chapter': prev_chapter,
        'next_chapter': next_chapter,
    }
    
    return render(request, 'cafeteria/comic_detail.html', context)