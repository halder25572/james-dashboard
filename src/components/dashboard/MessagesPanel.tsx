import { messages } from "@/lib/data";
import clsx from "clsx";

export default function MessagesPanel() {
    return (
        <section>
            <div className="px-4 pb-3">
                <h3 className="text-sm font-semibold text-gray-800">
                    Messages
                </h3>
            </div>
            <div className="rounded-xl border border-gray-200 overflow-hidden">
                {/* Message List */}
                <div>
                    {messages.map((msg, index) => (
                        <div
                            key={msg.id}
                            className={clsx(
                                "flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition cursor-pointer",
                                index !== messages.length - 1 && "border-b border-gray-200"
                            )}
                        >
                            {/* Avatar */}
                            <div
                                className={clsx(
                                    "w-8 h-8 rounded-lg flex items-center justify-center text-sm shrink-0",
                                    msg.avatarColor
                                )}
                            >
                                {msg.avatar}
                            </div>

                            {/* Content */}
                            <div className="min-w-0">
                                <p className="text-sm font-medium text-gray-800">
                                    {msg.sender}
                                </p>
                                <p className="text-xs text-gray-500 mt-0.5 leading-snug">
                                    {msg.preview}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}