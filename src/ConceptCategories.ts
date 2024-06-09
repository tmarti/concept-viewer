const emotions = [
  {label:"Pure happiness", description:"Joy - \"Pure happiness.\" Joy is a powerful, often euphoric state of happiness that is usually caused by something exceptionally good or satisfying. It often includes feelings of contentment, satisfaction, and well-being." },
  {label:"Sorrowful distress", description:"Sadness - \"Sorrowful distress.\" This emotion is typically associated with feelings of disadvantage, loss, and helplessness. When someone is sad, they often feel down and might have a low mood that affects their day-to-day activities." },
  {label:"Anxiety anticipation", description:"Fear - \"Anxiety anticipation.\" Fear is a response to an impending threat or danger, characterized by increased alertness and preparation for physical action. It often serves a protective purpose, triggering the \"fight-or-flight\" response." },
  {label:"Fierce irritation", description:"Anger - \"Fierce irritation.\" Anger is an emotional response to perceived wrongs and injustice, often resulting in a desire to assert authority or independence, or a tendency to retaliate against the source of offense." },
  {label:"Unexpected astonishment", description:"Surprise - \"Unexpected astonishment.\" This emotion is a response to an unexpected event. It can be either positive or negative, depending on the nature of the surprise. It's characterized by a high level of stimulation and a need to re-evaluate one's understanding of the situation." },
  {label:"Revulsion reaction", description:"Disgust - \"Revulsion reaction.\" Disgust is a powerful aversion to something perceived as unpleasant or offensive. This emotion can be triggered by various stimuli including unpleasant tastes, sights, or moral situations." },
  {label:"Scornful disdain", description:"Contempt - \"Scornful disdain.\" Contempt is an emotion that puts someone or something considered worthless or beneath consideration. This emotion often involves moral superiority and a lack of respect." },
  {label:"Confident reliance", description:"Trust - \"Confident reliance.\" Trust is an emotion reflecting a level of comfort and firm belief in the reliability or truth of someone or something. It involves a complex mix of affective experiences with a significant history of interactions." },
];

const leadership = [
    {label:"Visionary guidance", description:"Authoritative Leadership - \"Visionary guidance.\" This style is characterized by a leader who sets clear objectives and directions but allows individuals some flexibility in how they achieve these goals. They motivate by appealing to people’s shared goals." },
    {label:"Collective input", description:"Democratic Leadership - \"Collective input.\" Leaders using this style solicit input from team members in decision-making processes, fostering collaboration and participation. This approach can boost morale and creativity by making members feel valued and involved." },
    {label:"Hands-off management", description:"Laissez-faire Leadership - \"Hands-off management.\" In this style, the leader provides little guidance to team members, who are then allowed to make decisions and solve problems on their own. This can be effective in highly skilled teams but risky in teams needing direction." },
    {label:"Performance reward", description:"Transactional Leadership - \"Performance reward.\" Leaders focusing on this style are centered on clear structures wherein specific tasks are rewarded. Performance is closely monitored and feedback is given directly related to achievements. This approach works well in environments where tasks are routine and outcomes are predictable." },
    {label:"Inspiring change", description:"Transformational Leadership - \"Inspiring change.\" These leaders focus on initiating change in organizations, staff, and themselves. They are characterized by their ability to inspire and motivate employees to exceed expectations by aligning team goals with a higher vision." },
    {label:"Personal development", description:"Coaching Leadership - \"Personal development.\" Coaching leaders focus heavily on the professional and personal development of their team members. They provide one-on-one guidance to help team members meet their individual goals, which in turn enhances their performance at work." },
    {label:"Directive control", description:"Autocratic Leadership - \"Directive control.\" This style is defined by individual control over all decisions with little input from group members. It can be effective in crises but might stifle creativity and autonomy in a standard setting." },
    {label:"Supportive facilitator", description:"Servant Leadership - \"Supportive facilitator.\" Servant leaders put the needs of their team members first and help people develop and perform as highly as possible. They lead by example and gain authority by earning trust and fostering a service-oriented environment." },
];

const attention = [
    {label:"Continuous focus", description:"Sustained Attention - \"Continuous focus.\" This type of attention is required for activities that demand prolonged concentration, such as studying for an exam or driving a long distance. It involves maintaining focus on a task over an extended period without becoming distracted." },
    {label:"Targeted filtering", description:"Selective Attention - \"Targeted filtering.\" Selective attention involves focusing on one specific aspect of the environment while ignoring other stimuli. For example, listening to a friend talk in a noisy room requires the ability to filter out the background noise." },
    {label:"Switching focus", description:"Alternating Attention - \"Switching focus.\" This type of attention allows an individual to shift focus between tasks that require different cognitive demands. For instance, alternating between writing a report and responding to emails." },
    {label:"Multitasking efficiency", description:"Divided Attention - \"Multitasking efficiency.\" Divided attention refers to the ability to process two or more responses or react to multiple tasks at the same time, such as cooking while watching TV." },
    {label:"Complex management", description:"Executive Attention - \"Complex management.\" This involves high-level thought, decision-making, and the management of attention resources among several tasks or priorities, such as planning a project while considering multiple variables." },
    {label:"Involuntary awareness", description:"Passive Attention - \"Involuntary awareness.\" Passive attention is drawn to stimuli without any conscious effort, often triggered by something surprising or significant, such as the sudden sound of a loud crash." },
    {label:"Minimal engagement", description:"Bored Attention - \"Minimal engagement.\" This is a form of attention where the focus is maintained nominally, often under unstimulating conditions. It’s the kind of attention you might use during a dull lecture or a repetitive task." },
    {label:"Intense concentration", description:"Hyperfocus - \"Intense concentration.\" This is an extreme form of mental concentration or visualization that focuses consciousness on a subject, topic, or task. In hyperfocus, one can become so absorbed in the task that they become oblivious to everything else around them, often found in highly engaging activities like playing video games or during a creative burst." },
];

const mental_illness = [
    {label:"Persistent sadness", description:"Major Depression - \"Persistent sadness.\" This mood disorder is characterized by a persistent feeling of sadness and a lack of interest in external stimuli. Symptoms can also include changes in sleep, appetite, energy level, concentration, daily behavior, or self-esteem." },
    {label:"Constant worry", description:"Generalized Anxiety Disorder (GAD) - \"Constant worry.\" GAD involves excessive, uncontrollable worry about everyday issues, such as health, money, or career. This worry is disproportionate to the actual source of concern and can affect physical health." },
    {label:"Mood extremes", description:"Bipolar Disorder - \"Mood extremes.\" This condition is marked by dramatic shifts in a person's mood, energy and ability to think clearly. These mood swings can range from highs (mania) to lows (depression), sometimes with periods of normal mood in between." },
    {label:"Altered perceptions", description:"Schizophrenia - \"Altered perceptions.\" Schizophrenia is a complex, long-term medical illness, characterized by symptoms like hallucinations, delusions, and extremely disordered thinking and behavior that impairs daily functioning." },
    {label:"Compulsive behavior", description:"Obsessive-Compulsive Disorder (OCD) - \"Compulsive behavior.\" OCD is characterized by unreasonable thoughts and fears (obsessions) that lead to compulsive behaviors. This disorder often centers on themes such as fear of germs or the need to arrange objects in a specific manner." },
    {label:"Trauma aftermath", description:"Post-Traumatic Stress Disorder (PTSD) - \"Trauma aftermath.\" PTSD can occur after a person has experienced or witnessed a traumatic event such as a natural disaster, a serious accident, a terrorist act, war/combat, rape, or other violent personal assault." },
    {label:"Emotional instability", description:"Borderline Personality Disorder (BPD) - \"Emotional instability.\" BPD is characterized by difficulties in regulating emotion. This can lead to severe, unstable mood swings, impulsivity and instability, poor self-image, and tumultuous personal relationships." },
    {label:"Focus deficiency", description:"Attention Deficit Hyperactivity Disorder (ADHD) - \"Focus deficiency.\" ADHD is characterized by a continuous pattern of inattention and/or hyperactivity-impulsivity that interferes with functioning or development. It often presents problems with organizing tasks, staying focused on one task, and social interaction." },
]

const social_rights = [
    {label:"Equitable entitlements", description:"Social Rights - \"Equitable entitlements.\" This involves advocating and ensuring that all individuals have equal access to basic rights and liberties, such as education, healthcare, and fair treatment under the law." },
    {label:"Eco-conscious actions", description:"Environmental Care - \"Eco-conscious actions.\" Environmental responsibility emphasizes the protection and improvement of the planet's ecosystems. This includes efforts to reduce pollution, conserve resources, and uphold biodiversity." },
    {label:"Wealth distribution", description:"Economic Equality - \"Wealth distribution.\" This type of social responsibility focuses on reducing the disparities in economic opportunity and wealth among different groups within society, aiming to achieve a more equitable economic landscape." },
    {label:"Ethical management", description:"Corporate Governance - \"Ethical management.\" This pertains to the way in which companies are directed and controlled, ensuring they operate with fairness, transparency, and accountability to their stakeholders." },
    {label:"Local engagement", description:"Community Involvement - \"Local engagement.\" This emphasizes the importance of businesses and individuals participating in community development and support, such as local volunteering, support for community projects, and enhancement of local facilities." },
    {label:"Diversity acceptance", description:"Cultural Awareness - \"Diversity acceptance.\" Cultural responsibility involves recognizing, respecting, and preserving the various cultures within a community or society, promoting diversity and inclusion." },
    {label:"Promoting well-being", description:"Health and Wellness - \"Promoting well-being.\" This focuses on improving health outcomes for all members of society by advocating for better health services, education, and preventive measures to ensure public health and safety." },
    {label:"Responsible purchasing", description:"Ethical Consumption - \"Responsible purchasing.\" This involves making purchasing decisions that are conscious of the environmental and social impacts of products and services, supporting fair trade and ethically produced goods." },
];

const abuse_forms = [
    {label:"Bodily harm", description:"Physical Abuse - \"Bodily harm.\" This form involves any intentional act causing injury or trauma to another person through physical contact. It includes hitting, punching, slapping, and other forms of physical assault." },
    {label:"Psychological harm", description:"Emotional Abuse - \"Psychological harm.\" Emotional or psychological abuse involves exposing someone to behavior that may result in psychological trauma, including anxiety, chronic depression, or post-traumatic stress disorder. It typically involves verbal assault, humiliation, intimidation, or infantilization." },
    {label:"Violated consent", description:"Sexual Abuse - \"Violated consent.\" This type of abuse involves forcing undesired sexual behavior by one person upon another. It ranges from non-consensual touching and coercive sexual acts to any sexual contact with someone unable to give consent." },
    {label:"Economic control", description:"Financial Abuse - \"Economic control.\" Financial or economic abuse involves controlling a person's ability to acquire, use, and maintain financial resources. Victims are often restricted from accessing funds or are stolen from directly, which diminishes their capacity to support themselves and forces dependency." },
    {label:"Care deprivation", description:"Neglect - \"Care deprivation.\" Neglect is a form of abuse where the caregiver fails to provide adequate care in terms of food, shelter, health care, and clothing to someone who cannot care for themselves, often resulting in deteriorating health or wellbeing." },
    {label:"Destructive words", description:"Verbal Abuse - \"Destructive words.\" This encompasses any use of language that is demeaning, derogatory, or insulting, intended to undermine the self-esteem of the person it's directed towards. It can be loud or subtle, including threats, insults, or excessively critical comments." },
    {label:"Faith manipulation", description:"Spiritual Abuse - \"Faith manipulation.\" This involves using a person’s spiritual beliefs to manipulate, control, or dominate them. It can include misusing doctrine, applying undue pressure to conform to specific beliefs, or exploiting spiritual authority for personal gain." },
    {label:"Digital harassment", description:"Cyber Abuse - \"Digital harassment.\" Cyber abuse takes place online and includes cyberbullying, stalking, and harassment. It uses digital technology to intimidate, threaten, or upset someone, often anonymously and repetitively." },
];

const social_areas = [
    {label:"Governance systems", description:"Politics - \"Governance systems.\" This area involves the activities associated with the governance of a country or other area, especially the debate among individuals or parties having or hoping to achieve power. It shapes laws, policies, and the distribution of resources." },
    {label:"Financial infrastructure", description:"Economy - \"Financial infrastructure.\" The economy encompasses all activities related to production, consumption, and trade of goods and services in an area. It affects employment, income levels, and overall economic growth and stability." },
    {label:"Knowledge dissemination", description:"Education - \"Knowledge dissemination.\" This sector involves the systems and processes through which education is delivered, including schools, colleges, and educational content. It plays a crucial role in skill development, critical thinking, and social mobility." },
    {label:"Spiritual practices", description:"Religion - \"Spiritual practices.\" Religion pertains to the organized collection of beliefs, cultural systems, and world views that relate humanity to an order of existence. It often influences personal values, cultural norms, and community traditions." },
    {label:"Medical services", description:"Healthcare - \"Medical services.\" Healthcare represents the organized provision of medical care to individuals or a community through services offered by medical professionals. It impacts public health, life expectancy, and quality of life." },
    {label:"Social expressions", description:"Culture - \"Social expressions.\" Culture includes the arts, customs, practices, languages, values, and items that are passed along and valued by a group of people. It enriches societal interactions and reflects the historical and social context of the community." },
    {label:"Ecological context", description:"Environment - \"Ecological context.\" This area deals with the interaction between society and the natural surroundings, including issues of conservation, pollution control, and sustainable management of natural resources." },
    {label:"Judicial frameworks", description:"Legal System - \"Judicial frameworks.\" The legal system comprises the laws and regulations, as well as the processes and infrastructure for enforcing them, governing the behavior of the populace. It ensures order, resolves disputes, and maintains social justice." },
];

export interface ConceptCategoriesDto {
    [key:string]: {
        label: string,
        description: string
    }[]
};

const tmp = {
    "Emotions": emotions,
    "Leadership styles": leadership,
    "Attention types": attention,
    "Mental illness": mental_illness,
    "Social rights": social_rights,
    "Abuse forms": abuse_forms,
    "Social areas": social_areas,
};

const all = [] as {label:string, description: string}[];

Object.values(tmp).forEach(x => x.forEach(y => all.push(y)));

export const ConceptCategories = {
  "Emotions": emotions,
  "Leadership styles": leadership,
  "Attention types": attention,
  "Mental illness": mental_illness,
  "Social rights": social_rights,
  "Abuse forms": abuse_forms,
  "Social areas": social_areas,
  "All categories": all,
} as ConceptCategoriesDto;