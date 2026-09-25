# AnnaSetu — Food Waste Redistribution Platform (SDG 2: Zero Hunger)

A MERN stack app connecting food **Donors** (restaurants, events, households) with **NGOs/shelters** to reduce food waste and fight hunger.

---

## Tech Stack
- **Frontend:** React + Vite + Tailwind CSS
- **Backend:** Node.js + Express
- **Database:** MongoDB (Atlas)
- **Auth:** JWT
- **Extra:** Socket.io (notifications), Leaflet.js (maps)

---

## Folder Structure
```
annasetu/
├── client/          # React frontend
└── server/          # Express backend
    ├── models/
    ├── routes/
    ├── controllers/
    └── middleware/
```

---

## Data Models (keep these simple)

```js
// User.js
{
  name: String,
  email: String,
  password: String,       // hashed
  role: String,            // "donor" | "ngo" | "volunteer"
  location: { lat: Number, lng: Number }
}
```

```js
// FoodListing.js
{
  donorId: ObjectId,
  foodType: String,
  quantity: String,
  expiryTime: Date,
  pickupAddress: String,
  status: String,          // "posted" | "claimed" | "pickedup" | "delivered"
  claimedBy: ObjectId       // NGO id, null until claimed
}
```

---

## Task List (build in this order)

### Phase 1 — Setup
- [ ] Init GitHub repo (client + server folders)
- [ ] Setup Express server + connect MongoDB Atlas
- [ ] Setup React app with Vite + Tailwind

### Phase 2 — Auth
- [ ] User model (donor/ngo/volunteer roles)
- [ ] Register + Login routes (JWT)
- [ ] Protected route middleware
- [ ] Frontend login/signup forms

### Phase 3 — Donor Side
- [ ] FoodListing model
- [ ] POST /listings (create) — donor only
- [ ] GET /listings/mine — donor's own posts
- [ ] Frontend form to post surplus food

### Phase 4 — NGO Side
- [ ] GET /listings — browse available food
- [ ] PATCH /listings/:id/claim — NGO claims a listing
- [ ] Frontend browse + claim UI

### Phase 5 — Status Tracking
- [ ] PATCH /listings/:id/status — update pickup/delivered
- [ ] Status badges in UI (Posted → Claimed → PickedUp → Delivered)

### Phase 6 — Extras (only after Phase 1–5 work)
- [ ] Add Leaflet map to show nearby listings
- [ ] Add Socket.io for live notifications on claim
- [ ] Simple dashboard: total meals saved, active listings

### Phase 7 — Deploy
- [ ] Backend → Render/Railway
- [ ] Frontend → Vercel
- [ ] Test full flow end-to-end
- [ ] Update this README with live links

---

## Notes
- Build ONE feature fully (backend route + frontend UI) before starting the next — don't build all routes then all UI.
- Keep each file focused: one model = one file, one route group = one file. Avoid giant files.
- Add comments explaining *why*, not just *what*, especially in auth/middleware logic.

## Current Status
_(update this section as you go)_
- Last completed:
- Currently working on:
- Blocked on:
