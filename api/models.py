from django.db import models
import uuid

class Room(models.Model):
    id = models.UUIDField(editable=False, primary_key=True, default=uuid.uuid4)
    code = models.UUIDField(max_length=300, default=uuid.uuid4, unique=True)
    host = models.CharField(max_length=50, unique=True)
    guest_can_pause = models.BooleanField(null=False, default=False)
    votes_to_skip = models.IntegerField(null=False, default=1)
    created_at = models.DateTimeField(auto_now_add=True)        
    def __str__(self):
        return str(code)