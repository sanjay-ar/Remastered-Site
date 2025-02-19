import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import './ChatBot.css';

const ChatBot = () => {
    const { isDarkMode } = useTheme();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            type: 'bot',
            content: `Welcome to Naatscorp! 👋`,
            actions: [
                { label: 'Our Products', action: () => handleMainMenu('products') },
                { label: 'About Us', action: () => handleMainMenu('about') },
                { label: 'Careers', action: () => handleMainMenu('careers') }
            ]
        }
    ]);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const navigateTo = (path) => {
        setIsOpen(false);
        navigate(path);
    };

    const getProductInfo = (productName) => {
        const products = {
            'electric bed': {
                title: "Electric Bed (ECB)",
                domain: "Commercial Domain",
                description: `✨ Transform your sleep experience with our revolutionary Electric Bed!

🛏️ Key Features:
• Integrated aromatherapy system
• Customizable fragrance options
• Mood-enhancing capabilities
• Premium sleep technology

💫 Benefits:
• Enhanced sleep quality
• Personalized comfort settings
• Therapeutic aromatherapy
• Perfect environment for restful sleep

Would you like to:
• Schedule a Demo
• View Technical Specifications
• Discuss Pricing`,
                actions: [
                    { label: 'Get Demo', action: () => navigateTo('/get-demo') },
                    { label: 'Contact Sales', action: () => navigateTo('/contact') }
                ]
            },
            'buddle': {
                title: "Buddle (BDL)",
                domain: "Medical Domain",
                description: `🏥 Revolutionary Patient Mobility Solution!

🔄 Innovative Features:
• Seamless bed-to-wheelchair conversion
• Advanced safety mechanisms
• Ergonomic design
• Healthcare provider-friendly controls

💪 Benefits:
• Reduces physical strain on caregivers
• Enhances patient comfort
• Streamlines patient transportation
• Improves healthcare efficiency

Perfect for:
• Hospitals
• Nursing Homes
• Rehabilitation Centers
• Home Healthcare`,
                actions: [
                    { label: 'Schedule Demo', action: () => navigateTo('/get-demo') },
                    { label: 'Learn More', action: () => navigateTo('/contact') }
                ]
            },
            'lazybed': {
                title: "Lazybed (LZB)",
                domain: "Commercial Domain",
                description: `🛋️ The Ultimate Work-Leisure Solution!

🎯 Smart Features:
• Seamless workspace-to-bed transition
• Ergonomic positioning
• Built-in productivity tools
• Comfort-optimized design

✨ Perfect for:
• Work-from-home professionals
• Small living spaces
• Modern lifestyles
• Comfort enthusiasts

💡 Unique Benefits:
• Maximizes space efficiency
• Promotes work-life balance
• Adaptable to your needs
• Premium comfort guarantee`,
                actions: [
                    { label: 'View Demo', action: () => navigateTo('/get-demo') },
                    { label: 'Get Details', action: () => navigateTo('/contact') }
                ]
            },
            '4d-chair': {
                title: "4D-Chair (4DC)",
                domain: "Commercial Domain",
                description: `🪑 Experience the Future of Ergonomic Seating!

🔬 Advanced Technology:
• Posture-adaptive system
• Real-time comfort adjustment
• Smart pressure distribution
• Movement-synchronized support

🎯 Key Benefits:
• Optimal spine alignment
• Enhanced workplace wellness
• Increased productivity
• Reduced fatigue

Perfect for:
• Office Environments
• Professional Workspaces
• Long-duration Seating
• Ergonomic Requirements`,
                actions: [
                    { label: 'Book Demo', action: () => navigateTo('/get-demo') },
                    { label: 'Specifications', action: () => navigateTo('/contact') }
                ]
            },
            'aide-n': {
                title: "Aide-N (ADN)",
                domain: "Medical Domain",
                description: `🏥 Revolutionary Patient Care Assistant!

🔧 Advanced Features:
• Intelligent patient support system
• Automated positioning control
• Caregiver strain reduction
• Smart monitoring capabilities

💪 Benefits:
• Enhanced patient dignity
• Reduced caregiver workload
• Improved care efficiency
• Better patient outcomes

Ideal for:
• Hospitals
• Nursing Homes
• Home Care Settings
• Rehabilitation Centers`,
                actions: [
                    { label: 'Request Demo', action: () => navigateTo('/get-demo') },
                    { label: 'Technical Info', action: () => navigateTo('/contact') }
                ]
            }
        };
        return products[productName.toLowerCase()];
    };

    const handleMainMenu = (option) => {
        switch(option) {
            case 'products':
                setMessages(prev => [...prev, {
                    type: 'bot',
                    content: `✨ Our Innovative Product Line-up

Please select a product to learn more:`,
                    actions: [
                        { label: '🛏️ Electric Bed (ECB)', action: () => handleProductSelect('electric bed') },
                        { label: '🏥 Buddle (BDL)', action: () => handleProductSelect('buddle') },
                        { label: '🛋️ Lazybed (LZB)', action: () => handleProductSelect('lazybed') },
                        { label: '🪑 4D-Chair (4DC)', action: () => handleProductSelect('4d-chair') },
                        { label: '🏥 Aide-N (ADN)', action: () => handleProductSelect('aide-n') },
                        { label: '⬅️ Main Menu', action: () => handleBackToMain() }
                    ]
                }]);
                break;

            case 'about':
                setMessages(prev => [...prev, {
                    type: 'bot',
                    content: `🏢 About Naatscorp

We are a pioneering medical device startup revolutionizing healthcare through innovation.

🎯 Our Mission
To make advanced healthcare accessible and efficient through cutting-edge technology.

💫 What We Do
• Develop AI-powered medical solutions
• Create innovative patient care systems
• Design ergonomic healthcare equipment
• Advance medical technology

🌟 Our Values
• Innovation in Healthcare
• Patient-Centric Solutions
• Quality and Safety
• Continuous Improvement

🏆 Why Choose Us
• Industry-leading technology
• Dedicated support team
• Proven track record
• Commitment to excellence`,
                    actions: [
                        { label: 'View Products', action: () => handleMainMenu('products') },
                        { label: 'View Gallery', action: () => navigateTo('/gallery') },
                        { label: 'Contact Us', action: () => navigateTo('/contact') },
                        { label: '⬅️ Main Menu', action: () => handleBackToMain() }
                    ]
                }]);
                break;

            case 'careers':
                setMessages(prev => [...prev, {
                    type: 'bot',
                    content: `🎯 Current Job Openings

1. Senior Software Engineer - Full Stack Developer
   📍 Coimbatore, India
   💼 Full-time | 5+ years experience

2. Lead Robotics Engineer - AI & Machine Learning
   📍 Coimbatore, India
   💼 Full-time | 6+ years experience

Would you like to:`,
                    actions: [
                        { label: 'View Full Job Details', action: () => navigateTo('/careers') },
                        { label: 'Apply Now', action: () => navigateTo('/careers') },
                        { label: '⬅️ Main Menu', action: () => handleBackToMain() }
                    ]
                }]);
                break;

            // ... other cases ...
        }
    };

    const handleProductSelect = (product) => {
        const productInfo = getProductInfo(product);
        setMessages(prev => [...prev, {
            type: 'user',
            content: `Selected: ${productInfo.title}`
        }, {
            type: 'bot',
            content: `✨ ${productInfo.title}
🏢 ${productInfo.domain}

${productInfo.description}

What would you like to know more about?`,
            actions: [
                { label: '💰 View Pricing', action: () => handlePricing(product) },
                { label: '🎯 Schedule Demo', action: () => navigateTo('/get-demo') },
                { label: '📝 Product Enquiry', action: () => handleEnquiry(product) },
                { label: '⬅️ Back to Products', action: () => handleMainMenu('products') }
            ]
        }]);
    };

    const handlePricing = (product) => {
        setMessages(prev => [...prev, {
            type: 'bot',
            content: `💰 Pricing Information

For detailed pricing information about ${product}, our sales team will be happy to assist you.

Would you like to:`,
            actions: [
                { label: '📞 Contact Sales', action: () => navigateTo('/contact') },
                { label: '📅 Schedule Demo', action: () => navigateTo('/get-demo') },
                { label: '⬅️ Back to Product', action: () => handleProductSelect(product) }
            ]
        }]);
    };

    const handleEnquiry = (product) => {
        setMessages(prev => [...prev, {
            type: 'bot',
            content: `📝 Product Enquiry

Thank you for your interest in ${product}!

How would you like to proceed?`,
            actions: [
                { label: '📅 Schedule Demo', action: () => navigateTo('/get-demo') },
                { label: '📞 Contact Sales', action: () => navigateTo('/contact') },
                { label: '⬅️ Back to Product', action: () => handleProductSelect(product) }
            ]
        }]);
    };

    const handleBackToMain = () => {
        setMessages([{
            type: 'bot',
            content: `Welcome back to the main menu! How can I help you?`,
            actions: [
                { label: 'Our Products', action: () => handleMainMenu('products') },
                { label: 'About Us', action: () => handleMainMenu('about') },
                { label: 'Careers', action: () => handleMainMenu('careers') }
            ]
        }]);
    };

    return (
        <>
            {/* Chat Toggle Button */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`chat-toggle ${isDarkMode ? 'dark' : ''}`}
                aria-label="Toggle chat"
            >
                {isOpen ? '✕' : '💬'}
            </button>

            {/* Chat Window */}
            <div className={`chat-window ${isOpen ? 'open' : ''} ${isDarkMode ? 'dark' : ''}`}>
                <div className="chat-header">
                    <h3>Naatscorp Assistant</h3>
                    <span className="online-indicator">●</span>
                </div>

                <div className="messages-container">
                    {messages.map((message, index) => (
                        <div key={index}>
                            <div className={`message ${message.type} ${isDarkMode ? 'dark' : ''}`}>
                                {message.content}
                            </div>
                            {message.actions && (
                                <div className="message-actions">
                                    {message.actions.map((action, actionIndex) => (
                                        <button 
                                            key={actionIndex}
                                            onClick={action.action}
                                            className="action-button"
                                        >
                                            {action.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
            </div>
        </>
    );
};

export default ChatBot;