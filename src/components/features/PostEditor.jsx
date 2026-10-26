import React from 'react';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { FileText } from 'lucide-react';

export default function PostEditor({ formData, setFormData, onSave, onCancel, isEditing }) {
  return (
    <Card className="space-y-4">
      <h2 className="text-lg font-semibold text-white flex items-center gap-2">
        <FileText className="w-5 h-5 text-emerald-400" />
        {isEditing ? 'Edit Post Entry' : 'Create New Post / Draft'}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Title"
          placeholder="Post Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <Input
          label="Slug"
          placeholder="Custom URL Slug (optional)"
          value={formData.slug}
          onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
        />
      </div>

      <Textarea
        label="Excerpt"
        placeholder="Short Summary / Excerpt"
        rows={2}
        value={formData.excerpt}
        onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
      />

      <Textarea
        label="Content (Markdown)"
        placeholder="Write post content here..."
        rows={10}
        value={formData.content}
        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
        className="font-mono"
      />

      <div className="flex gap-3 justify-end pt-2">
        {isEditing && (
          <Button variant="secondary" size="sm" onClick={onCancel}>
            Cancel
          </Button>
        )}
        <Button variant="warning" size="sm" onClick={() => onSave('draft')}>
          Save as Draft
        </Button>
        <Button variant="primary" size="sm" onClick={() => onSave('published')}>
          Publish Live
        </Button>
      </div>
    </Card>
  );
}