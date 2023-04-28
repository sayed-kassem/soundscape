import { defineStore } from "pinia";
import { auth } from "@/includes/firebase";
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../includes/firebase";
export default defineStore("user", {
    state: () => ({
        userLoggedIn: false,
    }),
    actions: {
        async register(values) {
            const userCred = await createUserWithEmailAndPassword(auth, values.email, values.password);
            await setDoc(doc(db, "users", userCred.user.uid), {
                name: values.name,
                email: values.email,
                age: values.age,
                country: values.country,
                timestamp: new Date(),
            });
            await updateProfile(userCred.user, {
                displayName: values.name,
            })

            this.userLoggedIn = true;
        },
        async authenticate(values) {
            await signInWithEmailAndPassword(auth, values.email, values.password);
            this.userLoggedIn = true;
        },
    },
});