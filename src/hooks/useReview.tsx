import review1Thumb from "../images/reviews/review1.png"
import review2Thumb from "../images/reviews/review2.png"
import review3Thumb from "../images/reviews/review3.png"
import review4Thumb from "../images/reviews/review4.png"
import review5Thumb from "../images/reviews/review5.png"
import googleReviewThumb from "../images/reviews/google-review-icon.png"


const REVIEWS_TITLE_DESCRIPTION = "We take pride in customer satisifcation. See what our customers have to say about us!";

type Review = {
  id: string,
  thumb: string,
  name: string,
  rating: number,
  comment: string,
  reviewCount: number,
  link: string,
  sourceThumb: string
}

const review1: Review = {
  id: '1',
  thumb: review1Thumb,
  name: "Agapi Gessesse",
  rating: 5,
  comment: "I recently had the pleasure of visiting Safe Ride Motors, and I can confidently say that my experience was exceptional. From the moment I stepped into the shop, I was greeted with a friendly smile and a genuine willingness to assist.",
  reviewCount: 11,
  link: 'https://g.co/kgs/m19gWBk',
  sourceThumb: googleReviewThumb
}

const review2: Review = {
  id: '2',
  thumb: review2Thumb,
  name: "Ferhan Abdullah",
  rating: 5,
  comment: "THIS IS ONE THE MOST TRUSTWORTHY AND ACCOUNTABLE mechanic shops in the GTA. Hands down to the owner Rami and all his employees. They treat your car like their own",
  reviewCount: 8,
  link: 'https://g.co/kgs/ezbRFiY',
  sourceThumb: googleReviewThumb
}

const review3: Review = {
  id: '3',
  thumb: review3Thumb,
  name: "OhhMrWillson",
  rating: 5,
  comment: "Great experience! Mr Rami gave me truthful consultation when I brought my car and the staff took really good care of me. Would totally recommend!",
  reviewCount: 3,
  link: 'https://g.co/kgs/ECauEwD',
  sourceThumb: googleReviewThumb
}

const review4: Review = {
  id: '4',
  thumb: review4Thumb,
  name: "Izz Awad",
  rating: 5,
  comment: "Excellent experience. First time visiting and we will be back. Mr Rami was so friendly and personable. Made me feel like a regular even thought it was my first time in their shop.",
  reviewCount: 3,
  link: 'https://g.co/kgs/jbc9dxF',
  sourceThumb: googleReviewThumb
}

const review5: Review = {
  id: '5',
  thumb: review5Thumb,
  name: "Sabina Simmonds",
  rating: 5,
  comment: "I'm so lucky to have asked someone in my neighborhood where they get their car serviced because it's truely impossible to find a trustworthy mechanic.",
  reviewCount: 5,
  link: 'https://g.co/kgs/hcYJ71t',
  sourceThumb: googleReviewThumb
}



export function useReview() {

  const reviewList: Review[] = [];
  reviewList.push(review1);
  reviewList.push(review2);
  reviewList.push(review3);
  reviewList.push(review4);
  reviewList.push(review5);

  return { reviewList, REVIEWS_TITLE_DESCRIPTION }
};