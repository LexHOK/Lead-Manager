from django.contrib import admin
from .models import Lead

# Register your models here.


class LeadAdmin(admin.ModelAdmin):
    list_display = ('owner', 'id', 'name', 'email')
    list_display_links = ('id', 'owner', 'name')
    list_filter = ('owner',)
    search_fields = ('owner', 'name', 'email', 'message')
    list_per_page = 25


admin.site.register(Lead, LeadAdmin)
