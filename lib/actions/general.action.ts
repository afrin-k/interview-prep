'use server';

import { auth, db } from "@/firebase/admin";
import { CollectionReference } from "firebase-admin/firestore";
import { cookies } from "next/headers";

export async function getInterviewsByUserId(userId: string | undefined): Promise<Interview[] | null> {
    // 1. Guard clause to handle undefined or null userId
    if (!userId) {
        return null; // Or return [] if you prefer
    }

    const interviews = await db
        .collection('interviews')
        .where('userId', '==', userId)
        .orderBy('createdAt', 'desc')
        .get();

    // 2. Return the mapped data
    return interviews.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    })) as Interview[];
}

export async function getLatestInterviews(params: GetLatestInterviewsParams): Promise<Interview[] | null> {
    // 1. Guard clause to handle undefined or null userId
    const {userId, limit=20} = params;

    if (!userId) {
        return null; // Or return [] if you prefer
    }

    const interviews = await db
        .collection('interviews')
        .where('finalized','==',true)
        .where('userId', '!=', userId)
        .orderBy('createdAt', 'desc')
        .limit(limit)
        .get();

    // 2. Return the mapped data
    return interviews.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    })) as Interview[];
}

//id of interview
export async function getInterviewsById(id: string | undefined): Promise<Interview | null> {
    // 1. Guard clause to handle undefined or null userId
    if (!id) {
        return null; // Or return [] if you prefer
    }

    const interviews = await db
        .collection('interviews')
        .doc(id)
        .get();

    // 2. Return the mapped data
    return interviews.data() as Interview | null;
}