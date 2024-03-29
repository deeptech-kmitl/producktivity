import { component$ } from '@builder.io/qwik';
import { Box, Button, Text } from '@producktivity/ui';

interface TemplatePreviewProps {
  template: Template;
}

export const TemplatePreview = component$(({ template }: TemplatePreviewProps) => {
  return (
    <Button variant="surface" href={`/dashboard/project/${template.id}`}>
      <Box gap="1">
        <Box padding="3" variant="surface" rounded="md">
          <img src="https://i0.wp.com/vat.or.th/wp-content/uploads/2021/03/placeholder.png?ssl=1" />
        </Box>
        <Text variant="h3" weight="semibold">
          {template.name}
        </Text>
        <Text variant="small" theme="secondary">
          Created since: {new Date(template.createdAt).toLocaleDateString()}
        </Text>
      </Box>
    </Button>
  );
});
