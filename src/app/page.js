"use client";
import {
  Button,
  Container,
  Divider,
  Group,
  Pagination,
  Rating,
  Space,
  Text,
  Textarea,
  Title,
} from "@mantine/core";

import { Footer } from "@/components/Footer";
export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Title order={4} mt="sm">
        Your rating
      </Title>
      <Rating size="lg" />
      <Textarea
        label="Your review"
        mt="xs"
        placeholder="Do you enjoy eating?"
        minRows={3}
      />
      <Button mt="xs" color="orange">
        Submit Review
      </Button>
      <Divider my="sm" />
      <Group position="center">
        <Title order={4}>Elon Musk</Title>
        <Rating value={(5, 5)} readOnly />
      </Group>
      <Text align="center " color="dimmed">
        Best pizza in this world. I give you X score.
      </Text>
      <Divider my="sm" />
      <Group position="center">
        <Title order={4}>Mark Zuck</Title>
        <Rating value={(5, 4)} readOnly />
      </Group>
      <Text align="center" color="dimmed">
        My favourite part is pepperoni
      </Text>

      <Pagination position="center" mt="md" color="orange" total={20} />
      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 Nattida Phaiboontanasan 650610759
      </Text>
    </Container>
  );
}
