import { Link } from 'react-router-dom';
import { SectionHeader } from '@/components/SectionHeader';
import { ScrollReveal } from '@/components/ScrollReveal';

const blogPosts = [
  {
    id: 1,
    category: 'Personal Finance',
    title: 'How to Improve Your Credit Score in Canada',
    excerpt: 'Learn practical strategies to boost your credit score and qualify for better loan rates.',
    date: 'May 15, 2026',
    image: '/assets/blog-1.jpg',
  },
  {
    id: 2,
    category: 'Loans',
    title: 'Understanding No Credit Check Loans',
    excerpt: 'Everything you need to know about no credit check loans and how they work.',
    date: 'May 10, 2026',
    image: '/assets/blog-2.jpg',
  },
  {
    id: 3,
    category: 'Guide',
    title: 'Top 5 Reasons to Consider an Installment Loan',
    excerpt: 'Discover why installment loans are a popular choice for Canadians.',
    date: 'May 5, 2026',
    image: '/assets/blog-3.jpg',
  },
  {
    id: 4,
    category: 'Personal Finance',
    title: 'Budgeting Tips for Loan Repayment',
    excerpt: 'Smart budgeting strategies to help you repay your loan on time.',
    date: 'April 28, 2026',
    image: '/assets/blog-4.jpg',
  },
  {
    id: 5,
    category: 'Loans',
    title: "Microloans vs. Traditional Loans: What's the Difference?",
    excerpt: 'A detailed comparison of microloans and traditional bank loans.',
    date: 'April 20, 2026',
    image: '/assets/blog-5.jpg',
  },
  {
    id: 6,
    category: 'Guide',
    title: 'How to Choose the Right Lender in Canada',
    excerpt: 'Tips for finding a trustworthy lender that meets your financial needs.',
    date: 'April 15, 2026',
    image: '/assets/blog-6.jpg',
  },
];

export function BlogsPage() {
  return (
    <>
      {/* Blogs Hero */}
      <section className="bg-[#F6F7F8] pt-28 md:pt-32 pb-12 md:pb-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <SectionHeader
              label="GoLoans Canada"
              heading="Our Blog"
              subheading="Stay informed with the latest tips, guides, and insights on personal finance and loans in Canada."
              centered
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <ScrollReveal stagger={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-pointer group"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <span className="inline-block bg-green-light text-[#159A23] text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold text-[#1F2937] mb-2 line-clamp-2 group-hover:text-[#159A23] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] mb-3 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#9CA3AF]">{post.date}</span>
                    <Link
                      to={`/blogs/${post.id}`}
                      className="text-sm font-semibold text-[#159A23] hover:underline"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
