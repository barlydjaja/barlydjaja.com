import { useInView } from 'react-intersection-observer';
import { VerticalTimelineElementProps } from 'react-vertical-timeline-component';
import cx from 'classnames';

const TimelineItem = (
  {
    children,

    // ICON
    icon,
    iconStyle,
    iconOnClick,
    iconClassName,

    // CONTENT
    contentStyle,
    contentArrowStyle,
    onTimelineElementClick,
    textClassName,

    // DATE
    date,
    dateClassName
  }: VerticalTimelineElementProps) => {
  const {ref, inView} = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  return (
    <div ref={ref} className={cx('vertical-timeline-element', 'overflow-hidden')}>
      <span
        style={{boxShadow: 'none', ...iconStyle}}
        onClick={iconOnClick}
        className={cx(
          iconClassName,
          `shadow-size-small vertical-timeline-element-icon`,
          {
            'bounce-in': inView,
            'is-hidden': !inView,
          }
        )}
      >
        {icon}
      </span>

      <div
        style={contentStyle}
        onClick={onTimelineElementClick}
        className={cx(
          'vertical-timeline-element-content button-accent',
          textClassName,
          {
            'bounce-in': inView,
            'is-hidden': !inView,
          }
        )}
      >
        <div
          style={contentArrowStyle}
          className="vertical-timeline-element-content-arrow button-accent"
        />
        {children}
        <span
          className={cx(
            dateClassName,
            'vertical-timeline-element-date'
          )}
        >
          {date}
        </span>
      </div>
    </div>
  );
};

export default TimelineItem;
