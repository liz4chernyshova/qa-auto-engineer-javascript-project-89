import { test, expect } from "vitest";
import Widget from '@hexlet/chatbot-v2';
import steps from "../__fixtures__/chatbot-config";
import { render, screen, waitFor } from "@testing-library/react";

describe('ChatBot', () => {
    test('Renders correctly', async () => {
        render(Widget(steps));
        await waitFor(() => {
            expect(screen.getByText(/Открыть чат/i)).toBeInTheDocument();
        });
    });
});
