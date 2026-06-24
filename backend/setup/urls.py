from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from .views import IndexView

urlpatterns = [
    path('area-restrita/', admin.site.urls),
    path('api/', include('api.urls')),
    path('blog/', include('blog.urls')),
]

# Garante que uploads do Django (ImageField/FileField) funcionem localmente
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += [
    re_path(r'^.*$', IndexView.as_view(), name='index'),
]