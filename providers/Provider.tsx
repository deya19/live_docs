"use client";

import React from "react";
import {
  LiveblocksProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import Loader from "@/components/Loader";
import { getClerkUsers, getDocumentUsers } from "@/lib/actions/user.actions";
import { useUser } from "@clerk/nextjs";

export default function Provider({ children }: { children: React.ReactNode }) {
  const {user: clerkUser} = useUser();

  return (
    <LiveblocksProvider
      authEndpoint="/api/liveblocks-auth"
      //to see who shares your document in navbar in real time
      resolveUsers={async({userIds}) => {
        const users = await getClerkUsers({userIds});

        return users;
      }}

      resolveMentionSuggestions={async ({ text, roomId }) => {
        const roomUsers = await getDocumentUsers({
          roomId,
          currentUser: clerkUser?.emailAddresses[0].emailAddress!,
          text,
        })

        return roomUsers;
      }}
    >
      <ClientSideSuspense fallback={<Loader/>}>
        {children}
      </ClientSideSuspense>
    </LiveblocksProvider>
  );
}
